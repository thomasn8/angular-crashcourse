yarn global add @angular/cli

if [ "$BUILD_TYPE" = "Setup" ];
then
	NG_CLI_ANALYTICS=false ng new project --skip-git --interactive=false --package-manager=yarn --routing=true --style=css # --verbose=true --strict=true
	yarn install
fi


if [ "$BUILD_TYPE" = "Production" ];
then
	# ...
	# yarn global add serve
	yarn install
	yarn build
	# serve -s build
else
	cd /app/project
  NG_CLI_ANALYTICS=false ng serve --host front --port 3000
fi


# tail -f
