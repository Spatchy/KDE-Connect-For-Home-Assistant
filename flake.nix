{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-25.11";
  };

  outputs = {
    self,
    nixpkgs,
  }: let
    system = "x86_64-linux";
    pkgs = nixpkgs.legacyPackages.${system};
    runtimeDeps = with pkgs; [
      kdePackages.kdeconnect-kde
    ];
  in {
    devShells.${system}.default = pkgs.mkShell {
      buildInputs = with pkgs; [
        nodejs_latest
        nodePackages.npm
      ] ++ runtimeDeps;
      
      shellHook = ''
        echo "Node.js development environment loaded!"
        echo "Node version: $(node --version)"
        echo "npm version: $(npm --version)"
      '';
    };

    packages.${system}.default = pkgs.buildNpmPackage {
      name = "kde-connect-for-home-assistant";
      
      src = self;

      buildInputs = runtimeDeps;
      
      npmDeps = pkgs.importNpmLock {
        npmRoot = ./.;
      };
      
      npmConfigHook = pkgs.importNpmLock.npmConfigHook;
      
      installPhase = ''
        mkdir -p $out
        cp -r dist/* $out/
      '';
    };
  };
}