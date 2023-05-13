
if [ "$BUILD_TYPE" = "Setup" ]; 
then 
	composer create-project laravel/laravel $APP_NAME
fi


# if [ "$BUILD_TYPE" = "Production" ]; 
# then 
# 	# ...
# else
# 	# ...
# fi


tail -f
