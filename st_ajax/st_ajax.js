function ajax(ParamArray) {
    try {
        let url = ParamArray.url;
        let method = ParamArray.method;
        let data = ParamArray.data;
        let success = ParamArray.success;
        let failed = ParamArray.failed;

        let request = new XMLHttpRequest();

        request.onreadystatechange = function() {
            if (request.readyState === 4) 
                if (request.status === 200) {
                    success(request.responseText);
                } else {
                    failed(request.status+' '+request.statusText+' '+request.responseText+' '+request.failed+' '+request.error);
                }
        }

        request.open(method, url);
        request.send(data);
        
    } catch (error) {
        failed(error);
    }

    return false;
}