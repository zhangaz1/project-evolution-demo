export default interface gameModule {
	id: number,
	name: string,
	describtion,

	boot(canvas): Promise<any>
}
