const PaletaContext = {
	paletaEndpoint: () => `${Api.baseUrl}/paletes`,
	paletaLista: () => `${PaletaContext.paletaEndpoint()}/all-paletes`,
	paletaById: (id) => `${PaletaContext.paletaEndpoint()}/one-palete/${id}`,
	createPaleta: () => `${PaletaContext.paletaEndpoint()}/create-palete`,
	updatePaletaById: (id) =>
		`${PaletaContext.paletaEndpoint()}/update-palete/${id}`,
	deletePaletaById: (id) =>
		`${PaletaContext.paletaEndpoint()}/delete-palete/${id}`,
};

export const Api = {
	baseUrl: 'https://api-geladon.herokuapp.com',
	...PaletaContext,
};
