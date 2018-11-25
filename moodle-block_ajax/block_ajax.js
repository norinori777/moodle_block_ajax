M.block_ajax = {
    Y: null,
    root: null,

    init: function(Y){
        this.Y = Y;
        this.root = M.cfg.wwwroot;
        M.block_ajax.prepare_click_for_ajax();
    },
    prepare_click_for_ajax: function(){
        var Y = this.Y;
        Y.one('#agree').on('click', function(){
            var url = this.getData('url');
            Y.io(url, {
                method: 'POST',
                data: 'result=agree',
                headers: {
                    'Content-Type': 'application/json',
                },
                on: {
                    success: function(id, o){
                        try {
                            var response = Y.JSON.parse(o.responseText);
                            alert(response);
                        }catch(e){
                            alert('JSON parse failed');
                            return;
                        }
                    }
                }
            });
        });
        Y.one('#disagree').on('click', function(){
            var url = this.getData('url');
            Y.io(url, {
                method: 'POST',
                data: 'result=disagree',
                headers: {
                    'Content-Type': 'application/json',
                },
                on: {
                    success: function(id, o){
                        try{
                            var response = Y.JSON.parse(o.responseText);
                            alert(response);
                        }catch(e){
                            alert('JSON parse failed');
                            return;
                        }
                    }
                }
            });
        });
    }
}