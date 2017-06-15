/*
	Hybrid App with SQLite
	SQL DOCS -> https://www.tutorialspoint.com/sqlite/sqlite_create_table.htm
	PHONEGAP SQLITE -> http://docs.phonegap.com/en/1.3.0/phonegap_storage_storage.md.html#SQLTransaction
*/
class App{
	constructor(){
		this.student=[];		
	}
	render(html,component){
		component.innerHTML=html;
	}
	reRender(html,component){
		component.innerHTML+=html;
	}
	initializeDatabase(){
		/*
			SQL: CREATE TABLE student(
				id char(50),
				firstname char(50),
				lastname char(50)
			)
		*/
		function populateDB(tx) {
			let sql = `
				CREATE TABLE student(
					id char(50),
					firstname char(50),
					lastname char(50)
				)
			`;
			tx.executeSql(sql);
		     //tx.executeSql('DROP TABLE IF EXISTS DEMO');
		     //tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
		     //tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
		     //tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');
		}

		function errorCB(err) {
		    console.log("Error processing SQL: "+err);
		}

		function successCB() {
		    console.log("success!");
		}

		var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
		db.transaction(populateDB, errorCB, successCB);
	}
	createStudent(id,firstname,lastname){
		//SQL: 
		function populateDB(tx) {
			let sql = `
				INSERT INTO student VALUES('${id}','${lastname}','${firstname}')
			`;
			tx.executeSql(sql);
		     //tx.executeSql('DROP TABLE IF EXISTS DEMO');
		     //tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
		     //tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
		     //tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');
		}

		function errorCB(err) {
		    console.log("Error processing SQL: "+err);
		}

		function successCB() {
		    console.log("success!");
		}

		var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
		db.transaction(populateDB, errorCB, successCB);		
	}
	readStudent(){
		//SQL: SELECT * FROM student
		//SQL: SELECT id,lastname FROM student
		//SQL: SELECT id,lastname,firstname FROM student WHERE id='12312'
	}
	updateStudent(){
		//SQL: UPDATE student SET firstname='Jason John' WHERE id='12312'
		//SQL: UPDATE student SET firstname='JASON JOHN', lastname='LAM' WHERE id='12312'
	}
	deleteStudent(){
		//SQL: DELETE FROM student WHERE firstname='Jason'
	}
}

class Component extends App{
	constructor(){
		super();
		this.state = [];
	}
	main(){
		this.initializeDatabase();
		let html = `
			<h1>Create</h1>
			<hr>
			<h1>Read</h1>
			<hr>
			<h1>Update</h1>
			<hr>
			<h1>Delete</h1>
			<hr>
		`;
		this.render(html,document.querySelector('#app'));
	}
}

let component = new Component();
component.main();