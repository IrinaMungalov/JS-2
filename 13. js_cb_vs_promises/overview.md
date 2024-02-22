





## JS / Callback / Promise

    > architecture (dependency)
    > complexity
    > flexibility










X start
|                                  +-------------- (data) => {...}
|                                 /                            |
x -- call --> fetchData (1,10,5, cb)                           +--> console.log(data)
                  |         
                  v         
             setTimeout( (...)=>{...},... )              ^
                  |               |                      |
                  |               v                      |
                  |            algorithm() ---------- cb( )
                  |               |
                  |               |
                  |               v
x <---------------+             [...] -- return --> timerObject
v
x end











                 +----->
                 |
+------------(params)------+
|    |                     |
|    |                     |
|    x                     |
|    |                     |
|    x                     |
|    |                     |
|    x                     |
|    |                     |
|    v                     |
+-----------------x--------+
                  












                     +-------------------------------+
                     v                  timer       cb
     fetchData(..., cb)                 ()=>{ }     ()=>{}
x----x---------x-----|------------------x----^---x--x-------x----------->
                     |                       |
                     +-----------------------+



    fetchData() -------------------> promise ----------> ...
x----------------------------------------------------------------------->












