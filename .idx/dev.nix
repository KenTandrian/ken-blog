{ pkgs }: {
  channel = "stable-24.05";
  packages = [
    pkgs.nodejs_22
    pkgs.yarn
  ];
  idx = {
    extensions = [
      "bradlc.vscode-tailwindcss"
    ];
    previews = {
      enable = true;
      previews = {
        web = {
          command = [ "yarn" "dev" "--port" "$PORT" ];
          manager = "web";
        };
      };
    };
    workspace = {
      onCreate = {
        create-env = "cp .env.example .env";
      };
      onStart = {
        install-deps = "yarn install";
      };
    };
  };
}
