export default interface IApp {
	start(port?: number): Promise<null>
}