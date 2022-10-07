import React from 'react';



const submitPayment=(e)=>
{
	e.preventDefault()
	window.location.href='/payment';
}
const Header = ({ handleToggleDarkMode }) => {
	return (
		<div className='notepad_header'>
			<h1>Notes</h1>
			<button
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				className='save'
			>
				Toggle Mode
			</button>
			<button onClick={submitPayment}className='payment'>Payment</button>
			

		</div>
	);
};

export default Header;