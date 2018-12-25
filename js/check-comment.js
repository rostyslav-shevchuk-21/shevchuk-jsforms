$(document).ready(function(){

	var commentFormCheck = (function(){

		// Переменные модуля
		var _form = $('#comment-add-form');
		var _commentTextarea = $('#commentTextarea');
		var _commentErrorEmpty = $('#commentErrorEmpty');

		// Метод инициализации (запуска) модуля
		var init = function(){
			_setUpListeners(); // Запускаем прослушку событий
		}

		// Метод прослушки событий
		// В нем прослушиваем события на странице, например клики по кнопкам, и при срабатывании события запускаем нужный метод нашего модуля
		var _setUpListeners = function(){
			_form.on('submit', function(event){
				_formValidate(event);
			});
		}

		// Приватные методы
		var _formValidate = function (event) {
    		event.preventDefault();

    		if (_commentTextarea.val() =='') {
    			_commentErrorEmpty.fadeIn(800);
    		} else{
    			_commentErrorEmpty.fadeOut();
    			$('form').unbind('submit').submit();
    		}

			// console.log(_commentTextarea.val());
		}

		// Возвращаем публичные медоты, которые будут доступны снаружи
		return {
			init
		}
	
	}());
  
	// Запускаем модуль
	commentFormCheck.init();

});