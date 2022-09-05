import './PaletaLista.css';
//import { paletas } from 'mocks/paletas';
import React, { useState, useEffect } from 'react';
import PaletaListaItem from 'components/PaletaListaItem/PaletaListaItem';
import { PaletaService } from 'services/PaletaService.js';
import PaletaDetalhesModal from 'components/PaletaDetalhesModal/PaletaDetalhesModal';

function PaletaLista() {
	const paleta = {
		titulo: 'Açaí com Leite Condensado',
		descricao:
			'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
		foto: 'assets/images/acai-com-leite-condensado.png',
		preco: 10.0,
		sabor: 'Açaí',
		recheio: 'Leite Condensado',
		possuiRecheio: true,
	};

	const [paletas, setPaletas] = useState([]);
	const [paletaSelecionada, setPaletaSelecionada] = useState({});

	const adicionarItem = (paletaIndex) => {
		const paleta = {
			[paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) + 1,
		};
		setPaletaSelecionada({ ...paletaSelecionada, ...paleta });
	};
	const removerItem = (paletaIndex) => {
		const paleta = {
			[paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) - 1,
		};
		setPaletaSelecionada({ ...paletaSelecionada, ...paleta });
	};

	const getLista = async () => {
		const response = await PaletaService.getLista();
		setPaletas(response);
	};

	useEffect(() => {
		getLista();
	}, []);

	return (
		<div className="PaletaLista">
			{paletas.map((paleta, index) => (
				<PaletaListaItem
					key={`PaletaListaItem-${index}`}
					paleta={paleta}
					quantidadeSelecionada={paletaSelecionada[index]}
					index={index}
					onAdd={(index) => {
						adicionarItem(index);
					}}
					onRemove={(index) => {
						removerItem(index);
					}}
				/>
			))}
			<PaletaDetalhesModal paleta={paleta} />
		</div>
	);
}

export default PaletaLista;
