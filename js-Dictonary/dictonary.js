
  function buscar() {
    let text = document.getElementById("text").value;
    let elementHTML = ""; // lo iniciamos en vacío para que esté vacío cada vez que se presiona el botón
    elementHTML = "<div>"; // después de vaciarlo, le asignamos un div
    text = text.toLocaleLowerCase(); // lo pasamos a minúscula

    
    if (text == "algorithm") {
        elementHTML += "<h1>ALGORITHM</h1>";
        elementHTML += "<p>An algorithm is a set of instructions or rules designed to solve a definite problem. The problem can be simple like adding two numbers or a complex one, such as converting a video file from one format to another.</p>";   
    }else if (text == "program") {
        elementHTML += "<h1>PROGRAM</h1>";
        elementHTML += "<p>A computer program is termed as an organized collection of instructions, which when executed perform a specific task or function. A program is processed by the central processing unit (CPU) of the computer before it is executed. An example of a program is Microsoft Word, which is a word processing application that enables users to create and edit documents. The browsers that we use are also programs created to help us browse the internet.</p>";
    }else if (text == "API"){
        elementHTML += "<h1>API</h1>";
        elementHTML += "<p>Application Programming Interface (API) is a set of rules, routines, and protocols to build software applications. APIs help in communication with third party programs or services, which can be used to build different software. Companies such as Facebook and Twitter actively use APIs to help developers gain easier access to their services.</p>";       
    }else if (text == "argument") {
        elementHTML += "<h1>ARGUMENT</h1>";
        elementHTML += "<p>Argument or arg is a value that is passed into a command or a function. For example, if SQR is a routine or function that returns the square of a number, then SQR(4) will return 16. Here, the value 4 is the argument. Similarly, if the edit is a function that edits a file, then in edit myfile.txt, ‘myfile.txt’ is the argument.</p>";
    }else if (text == " ASCII") {
        elementHTML += "<h1>ASCCI</h1>";
        elementHTML += "<p>American Standard Code for Information Interexchange (ASCII) is a standard that assigns letters, numbers and other characters different slots, available in the 8-bit code. The total number of slots available is 256. The ASCII decimal number is derived from binary, which is assigned to each letter, number, and character. For example, the ‘$’ sign is assigned ASCII decimal number 036, while the lowercase ‘a’ character is assigned 097.</p>";
    }else if (text == "boolean") {
        elementHTML += "<h1>BOOLEAN</h1>";
        elementHTML += "<p>A Boolean expression or Boolean logic is an expression used for creating statements that are either TRUE or FALSE. Boolean expressions use AND, OR, XOR, NOT and NOR operators with conditional statements in programming, search engines, algorithms, and formulas. Boolean expressions are also called comparison expressions, conditional expressions, and relational expressions.</p>";
    }else if (text == "bug") {
        elementHTML += "<h1>BUG</>";
        elementHTML += "<p>A bug is a general term used to denote an unexpected error or defect in hardware or software, which causes it to malfunction. Even though bugs are often considered to be insignificant computer glitches, there have been instances where bugs have caused life-threatening conditions and led to major financial losses. This makes it imperative to invest in the process of finding bugs before programs are rolled out for their application. This process is known as testing.</p>";
    }else if (text == "char") {
        elementHTML += "<h1>CHAR</h1>";
        elementHTML += "<p>Character (char) is a display unit of information equal to one alphabetic letter or symbol. The value of a char variable could be any one character value, such as ‘a’, ‘1’, ‘$’ and ‘X’. This definition of character relies on the general definition of a character as a sole unit of written language. However, char as an abbreviation is a reserved keyword in languages such as C, C++, C#, and Java.</P>";
    }else if (text == "objects") {
        elementHTML += "<h1>OBJECTS</h1>";
        elementHTML += "<p>An object is a combination of related variables, constants and other data structures which can be selected and manipulated together. An object can include shapes that appear on a screen or the age of students in a school.</p>";   
    }else if (text == "object-oriented programming") {
        elementHTML += "<h1>OBJECT ORIENTED PROGRAMMING</h1>";
        elementHTML += "<p>Object-oriented programming (OOP) is a model defined by programmers that revolve around objects and data rather than ‘actions’ and ‘logic’. In OOP, not only the data type of a data structure is defined, but also the types of functions that can be applied to it. Through this, the data structure becomes an object that consists of both data and functions. Languages that use OOP concepts are Java, Python, C++, and Ruby.</p>";
    }else if (text == "class") {
        elementHTML += "<h1>CLASS</h1>";
        elementHTML += "<p>In Object-Oriented programming, a class refers to a set of related objects with common properties. Classes and the ability to create new classes render OOP a powerful and flexible programming model. For example, there might be a class called shapes which contains objects which are triangles, pentagons, square and circle.<p/>";
    }else if (text == "code") {
        elementHTML += "<h1>CODE</h1>";
        elementHTML += "<p>Code or source code is a term used to describe a written set of instructions, written using the protocols of a particular language, such as Java, C or Python. The code can also be used informally to describe text written in a specific language. There are instances where references to the code are made for different languages, such as ‘PHP Code’, ‘HTML Code’,  ‘Java Code’ or ‘CSS Code’.</p>";
    }else if (text == "command line interface") {
        elementHTML += "<h1>COMMAND-LINE INTERFACE</h1>";
        elementHTML += "<p>The command-line interface is a user interface based on the text. The UI is used to view and manage computer files. Command-line interfaces are also called command-line user interfaces, console user interfaces and character user interfaces. During the early 1960s and through the 1970s and 1980s, the command line interface was the primary means of interaction with most computers on terminals.</p>";
    }else if (text == "compilation") {
        elementHTML += "<h1>COMPILATION</h1>";
        elementHTML += "<p>The process of creating an executable program through code written in a compiled programming language is called compilation. Through compiling, the computer can understand and run the program without using the programming software used to create it. A compiler is a program that translates computer programs written using letters, numbers, and characters into a machine language program. An example of a compiler in C++.</p>";
    }else if (text == "conditionals") {
        elementHTML += "<h1>CONDITIONALS</h1>";
        elementHTML += "<p>Conditionals, conditional statements, and conditional expressions are features of programming language, which help the code make a choice and result in either TRUE or FALSE. These perform different actions depending on the need of the programmer, and multiple conditions can be combined into a single condition, as long as the final value of the condition is either TRUE or FALSE.  Examples of conditional statements are ‘IF’, ‘IF-Else’, ‘While’ and ‘Else-If’.</p>";
    }else if (text == "constants") {
        elementHTML += "<h1>CONSTANT</h1>";
        elementHTML += "<p>A constant (also known as Const) is a term used to describe a value that does not change throughout the execution of the program, unlike a variable. Constant cannot be altered and will remain fixed, and a constant can be a number, character, and string.</p>";
    }else if (text == "data types") {
        elementHTML += "<h1>DATA TYPES</h1>";
        elementHTML += "<p>A data type is the classification of a particular type of data. We as humans can understand the difference between a name and a number, but the computer cannot. The computer uses special internal codes to distinguish between different types of data it receives and processes. The most common data types include integer type which are numbers, a floating-point number data type which are decimal based numbers, Boolean values which are TRUE or FALSE and character data type which is alphabets.</p>";            
    }else if (text == "array") {
        elementHTML += "<h1>ARRAY</h1>";
        elementHTML += "<p>Arrays are lists or groups of similar types of data values that are grouped. All values in the array are of the same data type and are only differentiated by their position in the array. For example, the age of all students in a class can be an array as they will all be numbers. Similarly, the name of every student in a class will be an array as they will all be of the character data type.</p>";
    }else if (text == "declaration") {
        elementHTML += "<h1>DECLARATION</h1>";
        elementHTML += "<p>A statement that describes a variable, function or any other identifier is called a declaration. A declaration helps the compiler or interpreter identify the word and understand its meaning, and how the process should be continued. Even though they are important, they are optional and may be used depending on the nature of the programming language.</p>";
    }else if (text == "exception") {
        elementHTML += "<h1>EXCEPTION</h1>";
        elementHTML += "<p>A special, unexpected and anomalous condition encountered during the execution of a program is known as an exception. It can also be termed as an error or a condition that alters the way of the program or the microprocessor to a different path. An example of an exception can be the case when a program tries to load a file from the disk, but the file does not exist. The exceptions must be handled and eradicated in the program code to avoid any fatal error.</p>";
    }else if (text == "expression") {
        elementHTML += "<h1>EXPRESSION</h1>";
        elementHTML += "<p>An expression is a legal grouping of letters, symbols, and numbers being used to represent the value of one or more variables. Expressions are highly used in a number of programming languages and many other programs, with each having its own set of legal and illegal expressions. Every expression contains one or more operands (objects being manipulated) and operators (symbols representing actions). For example, in the expression A+B-C, A, B and C are operands while + and - are operators.</p>";
    }else if (text == "framework") {
        elementHTML += "<h1>FRAMEWORK</h1>";
        elementHTML += "<p>Framework in programming is a foundation with a specified level of complexity that may be altered by the programmer, making use of their code. A framework might include different software libraries, APIs, compilers and much more. In simpler terms, a framework provides a favorable environment for a certain type and level of programming for a project. A framework allows the developers to bypass the general necessities and focus on more project-related specifics.</p>";
    }else if (text == "hardcode") {
        elementHTML += "<h1>HARDCODE</h1>";
        elementHTML += "<p>In computer programming, the term hard code or hardcode is used to describe code that is not likely to change. Hardcoded features are built into hardware or software in such a way so that they cannot be modified later on. For example, if font size 10 is hardcoded in the software, then it might not change for a long time.</p>";
    }else if (text == "loop") {
        elementHTML += "<h1>LOOP</h1>";
        elementHTML += "<p>A loop is a sequence of instructions that repeat the same process over and over until a condition is met and it receives the order to stop. In a loop, the program asks a question, and if the answer directs the program to perform an action, the action is performed, and the loop runs again, performing the same task. It runs until the answer is such that no action is required and the code can proceed further. Loops are considered one of the most basic and powerful concepts in programming.</p>"; 
    }else if (text == "endless loop") {
        elementHTML += "<h1>ENDLESS LOOP</h1>";
        elementHTML += "<p>An endless loop or infinite loop is a continuous repetition of a program snippet, which is everlasting. This occurs majorly due to conditional operators and functions which redirect the code back to the snippet, making it endless.</p>";
    }else if (text == "iteration") {
        elementHTML += "<h1>ITERATION</h1>";
        elementHTML += "<p>Iteration is a single pass through a set of operations that deal with code. One form of iteration in computer programming is via loops. A loop will repeat a certain segment of code until a condition is met and it can proceed further. Each time the computer runs a loop, it is known as an iteration. In simple terms, iteration is the process to repeat a particular snippet of code over and over again to perform a certain action.</p>";
    }else if (text == "keywords") {
        elementHTML += "<h1>KEYWORDS</h1>";
        elementHTML += "<p>Words that are reserved by a programming language or a program as they have special meaning are known as keywords. These keywords are reserved to perform certain tasks, and they can be either commands or parameters. Each programming language has a set of reserved keywords (also known as reserved names) which cannot be used as variable names. Some keywords in ‘C’ language are ‘return’, ‘while’, ‘if’, ‘static’, ‘continue’ and ‘default’.</p>";
    }else if (text == "null") {
        elementHTML += "<h1>NULL</h1>";
        elementHTML += "<p>Null defines the lack of any value whatsoever. A null character is a programming code, which represents a character with no value, missing value or the end of a character string. If we state $val1= ”” and $val2= “1”, $val1 has a null value.</p>";
    }else if (text == "operand") {
        elementHTML += "<h1>OPERAND</h1>";
        elementHTML += "<p>An operand is a term used to denote the objects which can be manipulated using different operators. In the expression ‘A+F+Q’, ‘A’, ‘F’ and ‘Q’ are operands.</p>";
    }else if (text == "operator") {
        elementHTML += "<h1>OPERATOR</h1>";
        elementHTML += "<p>An operator is a term used to denote the object which can manipulate different operands. In the expression ‘A+F-Q’, ‘+’ and ‘-‘are operators. Examples of different operators are + (addition), -- (decrement), = (equals), != (not equal) and >= (greater than or equal to).</p>";
    }else if (text == "variable") {
        elementHTML += "<h1>VARIABLE</h1>";
        elementHTML += "<p>A variable is a location that stores temporary data within a program which can be modified, store and display whenever need. For example, if we have an integer variable with a name XYZ and it stores a value 10. If the variable is again initiated with a different value, it will store the new value. So if XYZ=9 is implemented, the variable location of XYZ will discard the value 10 and store the new value, which is 9.</p>";
    }else if (text == "pointer") {
        elementHTML += "<h1>POINTER</h1>";
        elementHTML += "<p>In programming, a pointer is a variable that contains the address of a location in the memory. The location is the commencing point of an object, such as an element of the array or an integer. Using pointers improves the performance of the program as it is cheaper in time and space to copy and dereference pointers than to copy and access the data to which the pointer is referring.</p>";
    }else if (text == "high level language") {
        elementHTML += "<h1>HIGH-LEVEL LANGUAGE</h1>";
        elementHTML += "<p>A high-level language (HLL) is a programming language that lets the developer write programs irrespective of the nature or type of computer. But if a computer has to understand a high-level language, it should be compiled into a machine language. HLLs are considered high-level because they are in close proximity to human languages and further from machine languages. High-level languages include BASIC, C, C++, Pascal, Prolog, and FORTRAN.</p>";
    }else if (text == "low level language") {
        elementHTML += "<h1>LOW-LEVEL LANGUAGE</h1>";
        elementHTML += "<p>A low-level language is a language that is very close to machine language and provides a little abstraction of programming concepts. Low-level languages are closer to the hardware than human languages. The most common examples of low-level languages are assembly and machine code.</p>";
    }else if (text == "machine language") {
        elementHTML += "<h1>MACHINE LANGUAGE</h1>";
        elementHTML += "<p>Also known as machine code, machine language is a lowest-level programming language consisting of binary digits or bits that are read by computers. Machine language is the only language understood by computers. As it consists of only numbers, they cannot be comprehended by humans. Therefore, programmers write code in the high-level language, which is then translated into assembly language or machine language by a compiler, which is then converted to a machine language by an assembler.</p>";
    }else if (text === "markup language") {
        elementHTML += "<h1>MARKUP LANGUAGE</h1>";
        elementHTML += "<p>A markup language is a relatively simple language that consists of easily understood keywords and tags, used to format the overall view of the page and its contents. The language specifies codes for formatting the layout and style of a page, within a text file only. The most common markup languages are Hypertext Markup Language (HTML), Extensible Markup Language (XML) and Standard Generalized Markup Language (SGML).</p>";
    }else if (text == "package") {
        elementHTML += "<h1>PACKAGE</h1>";
        elementHTML += "<p>A package is an organized module of related interfaces and classes. Packages are used to organize classes that belong to the same category or provide related functionality.</p>";
    }else if (text == "runtime") {
        elementHTML += "<h1>RUNTIME</h1>";
        elementHTML += "<p>Runtime or runtime is the time period during which a program is, in fact, running on a computer. If an operation occurs at ‘runtime’, it occurred when a program is running or the moment at which the program begins to run. Also known as execution time, the runtime is part of the life cycle of the program, and it denotes the time between when the program begins running and until it is closed by the OS or the user.</p>";
    }else if (text == "backend") {
        elementHTML += "<h1>BACKEND</h1>";
        elementHTML += "<p>Backend is another term used for background in programming. A backend task is the one that is performed in the background with the user’s direct interaction. Similarly, a backend developer is a person who designs programs that process data and perform tasks that users don’t directly see.</p>";
    }else if (text == "front end") {
        elementHTML += "<h1>FRONT-END</h1>";
        elementHTML += "<p>The Front-end is the user interface of a computer or any device. For example, any operating system provides users with the ease of navigation. A program or OS is considered good if the UI or Front-end is easy to use and seamless to navigate. Front-end developers are the programmers who design and develop the user interface of a device.</p>";
    }else if (text == "server-side") {
        elementHTML += "<h1>SERVER-SIDE</h1>";
        elementHTML += "<p>When procedures and processes are performed on the server, they are deemed server-side. On the other hand, the client-side is at the end of the user. Many programming languages are designed for server-side programmings such as PHP, Perl, and ASP. With the internet boom, almost all websites make use of both server-side and client-side processing. An excellent example of a server-side script is a search engine.</p>";
    }else if (text == "source data") {
        elementHTML += "<h1>SOURCE DATA</h1>";
        elementHTML += "<p>Source data or data source is the key location from which data is used in the program. The source data can come from a database, spreadsheet or even a hard-coded data location. When a program is executed to display data in a table, the program retrieves the data from its source and then presents it in the arrangement as defined in the code.</p>";
    }else if (text == "statement") {
        elementHTML += "<h1>STATEMENT</h1>";
        elementHTML += "<p>In programming, a statement is a single line of code written legally in a programming language that expresses an action to be carried out. A statement might have internal components of its own, including expressions, operators and functions. An example of a statement is A = A + 5. A program is nothing but a sequence of one or multiple statements.</p>";
    }else if (text == "syntax") {
        elementHTML += "<h1>SYNTAX</h1>";
        elementHTML += "<p>Similar to human languages, programming languages have their own set of rules on how statements can be conveyed. The set of these rules is known as syntax. While a number of programming languages share many features, functions, and capabilities, they differ in syntax. Without the proper use of the syntax, one cannot write an executable program, and a wrong syntax will lead to a plethora of errors.</p>";
    }else if (text == "token") {
        elementHTML += "<h1>TOKEN</h1>";
        elementHTML += "<p>A token is the smallest individual unit in a program, often referring to a portion of a much larger data piece. For example, if a person’s name is John Thomas Wood, it can be broken into tokens; ‘John’, ‘Thomas’ and ‘Wood’. The programmer can then go on to use only the portion or token they wish to. Tokens are classified into keywords, identifiers, literals, operators, and punctuators.</p>";
    }else {
        alert("We're sorry! We can't find the meaning. Please, check the spelling!"); 
    }

    elementHTML += "</div>"; // cerramos el div con el contenido
    document.getElementById("content").innerHTML = elementHTML;

    clearField();
    
}

const clearField = () => {
    text.value = "" ;
}
