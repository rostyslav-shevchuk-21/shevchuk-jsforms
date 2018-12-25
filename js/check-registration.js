$(document).ready(function(){

	var checkLogin = (function(){

		// Переменные модуля
		var _loginForm = $('#login-form');
		var _login = $('#login');
		var _password = $('#password');
		var _errorEmptyLogin = $('#error__empty-login');
		var _errorWrongPassword = $('#error__wrong-login');
		var _errorEmptyPassword = $('#error__empty-password');
		var _errorLoginPassword = $('#error__login-password');


		// Метод инициализации (запуска) модуля
		var init = function(){
			_setUpListeners(); // Запускаем прослушку событий
		}

		// Метод прослушки событий
		// В нем прослушиваем события на странице, например клики по кнопкам, и при срабатывании события запускаем нужный метод нашего модуля
		var _setUpListeners = function(){
			_loginForm.on('submit', function(event){
				_checkLogin(event);
				_checkPassword(event);
				_submitForm(event);
			});
		}

		// Приватные методы
		var _checkLogin = function (event) {
    		event.preventDefault();
    		var value = _login.val().trim();
    		if (value == '') {
    			_errorEmptyLogin.removeClass('notify-hide');
    		} else if (value == 'mail@mail.com' ) {
    			_errorLoginPassword.removeClass('notify-hide');
    			_errorEmptyLogin.addClass('notify-hide');
    		} else{
    			_errorEmptyLogin.addClass('notify-hide');
    		}

			if (value != '') {
				var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
				if (pattern.test( value )) {
					_errorWrongPassword.addClass('notify-hide');
				} else {
					_errorWrongPassword.removeClass('notify-hide');
					_errorEmptyLogin.addClass('notify-hide');
				}
			}

		}

		var _checkPassword = function (event) {
			event.preventDefault();
			if (_password.val().trim() == '') {
				_errorEmptyPassword.removeClass('notify-hide');
			} else {
				_errorEmptyPassword.addClass('notify-hide');
			}
		}

		var _submitForm = function (event) {
			event.preventDefault();
			var valueLogin = _login.val().trim();
			var valuePassword = _password.val().trim();
			if ((valueLogin != 'mail@mail.com' && valueLogin != '') && valuePassword != '') {
				$('#login-form').unbind('submit').submit();
			}

		}

		// Возвращаем публичные медоты, которые будут доступны снаружи
		return {
			init
		}
	
	}());
  
	// Запускаем модуль
	checkLogin.init();

});