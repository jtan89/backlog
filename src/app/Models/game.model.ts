export class Game {
    public name: string;
    public platform: any;
    public released: string;
    public genres: any;
    public description: string;
    public backgroundImage: string;
    public clip: any;

    constructor(
        name: string,
        platform: any,
        released: string,
        genres: any,
        description: string,
        backgroundImage: string,
        clip: any,
    ) {
        this.name = name;
        this.platform = platform;
        this.released = released;
        this.genres = genres;
        this.description = description;
        this.backgroundImage = backgroundImage;
        this.clip = clip;
    }
}

