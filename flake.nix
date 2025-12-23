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
  in {
    devShells.${system}.default = pkgs.mkShell {
      buildInputs = with pkgs; [
        nodejs_latest
        nodePackages.npm
      ];
      
      shellHook = ''
        echo "Node.js development environment loaded!"
        echo "Node version: $(node --version)"
        echo "npm version: $(npm --version)"
      '';
    };

    packages.${system}.default = pkgs.buildNpmPackage {
      name = "kde-connect-for-home-assistant";
      
      src = self;
      
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