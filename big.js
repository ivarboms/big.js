function make_big(str)
{
	fullwidth_upper_a = '\uFF21'.charCodeAt(0);
	fullwidth_lower_a = '\uFF41'.charCodeAt(0);
	return make_different(str, fullwidth_lower_a, fullwidth_upper_a);
}

function make_different(str, code_of_lower_a, code_of_upper_a)
{
	for (i = 0; i < str.length; ++i)
	{
		start = str.substr(0, i);
		char = str.substr(i, 1);
		end = str.substr(i + 1);

		char_code = char.charCodeAt(0);

		if (char_code >= 'A'.charCodeAt(0) && char_code <= 'Z'.charCodeAt(0))
		{
			char_code = char_code - 'A'.charCodeAt(0);
			char = String.fromCharCode(code_of_upper_a + char_code);
		}
		if (char_code >= 'a'.charCodeAt(0) && char_code <= 'z'.charCodeAt(0))
		{
			char_code = char_code - 'a'.charCodeAt(0);
			char = String.fromCharCode(code_of_lower_a + char_code);
		}

		str = start + char + end;
	}
	return str;
}
