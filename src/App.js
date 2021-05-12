import React, { useState } from 'react';
import './App.scss';
import Module from './components/Module/Module';

function App() {
	const [openModal, setOpenModal] = useState(false);
	const props = { openModal, setOpenModal };
	return (
		<div className="App">
			<button className="main__btn" onClick={() => setOpenModal(!openModal)}>
				POKRENI KONFIGURATOR
			</button>
			{openModal && <Module {...props} />}
		</div>
	);
}

export default App;
