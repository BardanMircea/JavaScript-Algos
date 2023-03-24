// Write a module urlParsing that exports a function urlParsing.

// The function urlParsing takes a URL as argument and returns a hash that describes it.

// The URL will always be valid and "easy" (URLs can be quite messy, we will only test with URLs similar to the examples).

// The function returns a hash with the appropriate values for protocol, host and arguments.

// You are not allowed to import a module that does the work for you!
// Examples
// This: urlParsing("https://google.com?q=Python")
// Will return:

// {'arguments': {'q': 'Python'}, 'protocol': 'https', 'host': 'google.com'}
// This: urlParsing("www.facebook.com?lg=fr&page=home&unsecure_data=true")
// Will return:

// {'arguments': {'lg': 'en', 'page': 'home', 'unsecure_data': 'true'}, 'protocol': 'http', 'host': 'www.facebook.com'}
// This: urlParsing("http://mywebsite.uk.com/blog/my_page")
// Will return:

// {'arguments': {}, 'protocol': 'http', 'host': 'mywebsite.uk.com'}

const urlParsing = (url) => {

    // creation de l'objet qu'on va renvoyer
    const urlDescription = {
        arguments : {},
        protocol : "",
        host : ""
    }

    // assignation du protocol 
    urlDescription["protocol"] = url.includes(":") ? url.split(":")[0] : "http";

    // check if url has arguments; if not, assign "host" and return
    if(!url.includes("?")){
        const host = url.includes("/") && url.includes(":") ? url.split("/")[2] : url.includes("/") ? url.slice(0, url.indexOf("/") ) : url; 
   
        urlDescription.host = host
       
        return urlDescription;
    }

    // if url has arguments, extract host and arguments
    const hostAndArgs = url.includes("/") && url.includes(":") ? url.slice(url.indexOf("/") + 2) : url; 

    //extract and assign host
    const host = hostAndArgs.slice(0, hostAndArgs.indexOf("/"))
    urlDescription.host = host;

    // extract arguments
    const args = hostAndArgs.slice(hostAndArgs.indexOf("?") + 1);
     
    // check if url contains just one argument
    if(!args.includes("&")){
        const keyValuePair = args.split("=")
        //assign argument
        urlDescription.arguments[keyValuePair[0]] = keyValuePair[1]
        return urlDescription;
    }
    
    // else if url contains several arguments
    const keyValuePairs = args.split("&")
    // assign arguments
    for(const elem of keyValuePairs){
        const keyValuePair = elem.split("=")
        urlDescription.arguments[keyValuePair[0]] = keyValuePair[1];
    }
       
    return urlDescription;
}
module.exports = urlParsing;
// console.log(urlParsing("https://google.com?q=Python"))
// console.log(urlParsing("www.facebook.com?lg=fr&page=home&unsecure_data=true"))
// console.log(urlParsing("random_string-qxqpdrgf.uk.com/random_string-jqkqhffn/random_string-dneyajzm/random_string-tsiupuwo"))
// console.log(urlParsing("random_string-ngwhvbsi.fr/random_string-eeehqpbb/random_string-nihebwfg/random_string-aioxmkyv?random_string-ghqquuri=random_string-cjokrrqo&random_string-zkhfayup=random_string-ldiihmmu&random_string-gcdgupoq=random_string-prfsovkj"))
// console.log(urlParsing("https://random_string-wyozbahi.net/random_string-moxggcfp/random_string-ywfhgagy/random_string-vmxxczkn?random_string-bixxvdxu=random_string-dumjtdtp&random_string-gzhexpdm=random_string-jdmlnutj&random_string-haoocsmw=random_string-wojhnzxo"))
