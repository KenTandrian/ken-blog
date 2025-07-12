{ pkgs }: {
  channel = "stable-25.05";
  packages = [
    pkgs.nodejs_22
    pkgs.pnpm
  ];
  idx = {
    extensions = [
      "bradlc.vscode-tailwindcss"
    ];
    previews = {
      enable = true;
      previews = {
        web = {
          command = [ "pnpm" "dev" "--port" "$PORT" ];
          manager = "web";
        };
      };
    };
    workspace = {
      onCreate = {
        create-env = "cp .env.example .env.local";
      };
      onStart = {
        install-deps = "pnpm install";
      };
    };
  };
}
