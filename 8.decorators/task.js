//Задача № 1
function cachingDecoratorNew(func) {

    let cache = [];

    function wrapper(...args) {
        const hash = md5(JSON.stringify(args));


        let objectInCache = cache.find((item) => item.hash === hash);

        if (objectInCache) {
            console.log("Из кеша: " + objectInCache.result);
            return "Из кеша: " + objectInCache.result;
        }

        const result = func(...args);


        cache.push({ hash, result });

        if (cache.length > 5) {
            cache.shift();
        }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;
    }

    return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {


    let timeoutId = null;

    function wrapper(...args) {
        clearTimeout(timeoutId);

        if (timeoutId === null) {
            func(...args);
            wrapper.count++;
        }
        timeoutId = setTimeout(() => {
            func(...args);
            wrapper.count++;
        }, delay);

        wrapper.allCount++;

    }
    wrapper.count = 0;
    wrapper.allCount = 0;
    clearTimeout(timeoutId);

    return wrapper;

}

