






## AJAX + real data
##  scrabbing/crawling

    - AJAX
    - dom parser












app
 |
127.0.0.1:5500 ----------- req -----------> en.wikipedia.org
    |
  origin       <---------- res ------------
               Access-Control-Allow-Origin











                      GET
            AJAX------------- req ------------>

               (text/html)
        response <----------------- res ------
            |
            |
            +------------+
                         v
parser.parseFromString(response, "text/html")
  |
  v
 doc (DOM)
  |
  v .querySelectorAll('...')
  |
  v
 HTMLCollection []
