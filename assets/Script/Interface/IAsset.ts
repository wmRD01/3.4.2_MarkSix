export default interface IAsset {
    loadAsset(): void;
    loadLogo?(lnag: string): void;
    checkAssetState: boolean;
    data: Map<string, any>;
}