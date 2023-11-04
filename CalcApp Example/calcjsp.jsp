<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<div align = "center">
		<h1>Calculator</h1>
		<form method = "get" action = "CalculatorServlet">
		<h4>
			<table style = "with: 80%">
				<tr>
					<td> Enter the first number: </td>
					<td> <input type = "text" name = "first" /> </td>
				</tr>
				<tr>
					<td> Enter the second number: </td>
					<td> <input type = "text" name = "second" /> </td>
				</tr>	
				<tr>
					<td> Enter the mathematical operator: </td>
					<td> <input type = "text" name = "symbol" /> </td>
				</tr>	
			</table>
			
			<input type="submit" value="Calculate">
			
			<input type="reset" value="Reset">
			</h4>
		</form>
	</div>
</body>
</html>