var connect_db=function connect_db(dbname){
    return "You are now connected to "+dbname
}
function open_db(dname){
    return "the database ready to work" +dname
}
export {connect_db, open_db}