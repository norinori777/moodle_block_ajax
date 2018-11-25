define(['jquery'], function($){
    return {
        init: function(){
            $('#agree').on('click', function(){
                var url = $(this).attr('data-url');
                $.ajax({
                    url: url,
                    type: 'POST',
                    data: {
                        result: 'agree'
                    },
                    dataType: 'json',
                    success: function(data){
                        alert(data.result);
                    },
                    error: function(data){
                        alert(data.result);
                    }

                });
            });
            $('#disagree').on('click', function(){
                var url = $(this).attr('data-url');
                $.ajax({
                    url: url,
                    type: 'POST',
                    data: {
                        result: 'disagree'
                    },
                    dataType: 'json',
                    success: function(data){
                        alert(data.result);
                    },
                    error: function(data){
                        alert(data.result);
                    }
                });
            });
        }
    }
})