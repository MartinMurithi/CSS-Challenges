## JS Data types and Data Structures
<p>JS is a <b>weakly</b> and <b>dynamic</b> typed language, meaning that variables can be assigned and re-assigned values of any type.</p>
<p>JS allows implicit type conversion when involving an operation of mismatched values instead of throwing an error.</p>
<p>Example of an implicit type conversion <code> console.log('js' + 12); //output js12</code> </p>
<p>JS converts 12 to a string and concatenates it to js.</p>
# Primitive Types
<ul>
<li><b>Null</b>, indicates that a value is explicitly empty</li>
<li><b>Undefined</b>, indicates absence of a value.</li>
<li>Boolean</li>
<li><b>String</b>, this is an immutable value. When an operation is done on a string, a new string is created insteading of changing the original one.</li>
<li>Number</li>
<li>Symbol</li>
<li>BigInt</li>
</ul>
# Undefined
<p>JS defaults to undefined when : </p>
<ul>
<li>A return with no value. E.g <br> <code>function x() <br>{//code <br> return;}</code></li>
<li>A variable is declared but not assigned. e.g let x;</li>
<li>Accessing a non-existent object property</li>
<li>Methods such as Map() return undefined when they have no values</li>
</ul>
# Object/Composite Types
<p>They are mutable, once they are created they can be changed.</p>
<ul>
<li>Object</li>
<li>Array</li>
<li>Dates</li>
<li>Functions</li>
</ul>