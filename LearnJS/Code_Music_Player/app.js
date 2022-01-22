const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const PLAYER_STORAGE_KEY = 'Thanh_Player'

const player = $('.player')
const heading = $('header h2')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const cd = $('.cd')
const playBtn = $('.btn-toggle-play')
const progress = $('#progress')
const nextBtn = $('.btn-next')
const prevBtn = $('.btn-prev')
const randomBtn = $('.btn-random')
const repeatBtn = $('.btn-repeat')
const playList = $('.playlist')


const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY))||{},
    songs: [
        {
            name: "Bước Qua Nhau",
            singer: "Vũ",
            path: "https://c1-ex-swe.nixcdn.com/NhacCuaTui1024/BuocQuaNhau-Vu-7120388.mp3?st=I9W59X1Odyi9QRGTehWfHg&e=1638708688",
            image: "https://avatar-nct.nixcdn.com/song/2021/11/19/6/d/9/1/1637317177185.jpg"
        },
        {
            name: "Ái Nộ",
            singer: "Masew, Khôi Vũ",
            path: "https://c1-ex-swe.nixcdn.com/NhacCuaTui1021/AiNo1-MasewKhoiVu-7078913.mp3?st=ngcoKLRyRorVu8KqUeS1wg&e=1638762705",
            image: "https://avatar-nct.nixcdn.com/song/2021/08/30/2/1/a/e/1630316309035.jpg"
        },
        {
            name: "Muộn Rồi Mà Sao Còn",
            singer: "Sơn Tùng M-TP",
            path: "https://c1-ex-swe.nixcdn.com/Believe_Audio19/MuonRoiMaSaoCon-SonTungMTP-7011803.mp3?st=tD-Ln6qGqkdH659AeuHsjQ&e=1638782546",
            image: "https://avatar-nct.nixcdn.com/song/2021/04/29/9/1/f/8/1619691182261.jpg"
        },
        {
            name: "Thức Giấc",
            singer: "Da LAB",
            path: "https://c1-ex-swe.nixcdn.com/NhacCuaTui1018/ThucGiac-DaLAB-7048212.mp3?st=1LcQhTisk8WrOQuzK4p86Q&e=1638782708",
            image: "https://avatar-nct.nixcdn.com/song/2021/07/14/8/c/f/9/1626231010810.jpg"
        },
        {
            name: "Độ Tộc 2",
            singer: "Masew, Độ Mixi, Phúc Du, Pháo",
            path: "https://c1-ex-swe.nixcdn.com/NhacCuaTui1020/DoToc2-MasewDoMixiPhucDuPhao-7064730.mp3?st=ehahZN3-iX9xYdBFgDgGcg&e=1638782785",
            image: "https://avatar-nct.nixcdn.com/song/2021/08/10/b/2/e/0/1628579601228.jpg"
        },
        {
            name: "Chúng Ta Sau Này",
            singer: "T.R.I",
            path: "https://c1-ex-swe.nixcdn.com/NhacCuaTui1010/ChungTaSauNay-TRI-6929586.mp3?st=l56Wr1fLE9fMnFehhpo5xg&e=1638782875",
            image: "https://avatar-nct.nixcdn.com/song/2021/01/27/5/2/2/b/1611738358661.jpg"
        },
        {
            name: "Dịu Dàng Em Đến",
            singer: "ERIK, NinjaZ",
            path: "https://c1-ex-swe.nixcdn.com/NhacCuaTui1021/DiuDangEmDen-ERIKNinjaZ-7078877.mp3?st=QmjyqbnGv3jClPKm4oA1YQ&e=1638782938",
            image: "https://avatar-nct.nixcdn.com/song/2021/08/30/2/1/a/e/1630307726211.jpg"
        },
        {
            name: "Hương",
            singer: "Văn Mai Hương, Negav",
            path: "https://c1-ex-swe.nixcdn.com/NhacCuaTui1010/Huong-VanMaiHuongNegav-6927340.mp3?st=PvHOWlRnF6TymvggYGding&e=1638783027",
            image: "https://avatar-nct.nixcdn.com/song/2021/01/22/9/f/2/1/1611280898757.jpg"
        },
        {
            name: "Miên Man",
            singer: "DUTZUX",
            path: "https://c1-ex-swe.nixcdn.com/NhacCuaTui1024/MienMan-DUTZUX-7120884.mp3?st=yTOFq5aH8FGEvbm-_n_KTA&e=1638783090",
            image: "https://avatar-nct.nixcdn.com/song/2021/11/19/6/d/9/1/1637320885751.jpg"
        },
        {
            name: "có hẹn với thanh xuân",
            singer: "MONSTAR",
            path: "https://c1-ex-swe.nixcdn.com/NhacCuaTui1020/cohenvoithanhxuan-MONSTAR-7050201.mp3?st=PjrrnZ2dZ3ffA6R7dRrppQ&e=1638783161",
            image: "https://avatar-nct.nixcdn.com/song/2021/07/16/f/4/9/8/1626425507034.jpg"
        },
    ],
    setConfig: function(key, value) {
        this.config[key] = value;
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config));
    },
    render: function () {
        const htmls = this.songs.map((song,index) => {
            return `
            <div class="song ${index === this.currentIndex  ? 'active' :''}"data-index="${index}">
                <div
                    class="thumb" 
                    style=" background-image: url('${song.image}')";"
                ></div>
                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                </div>
                <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>`
        })
        $('.playlist').innerHTML = htmls.join("")
    },

    defineProperties: function () {
        Object.defineProperty(this, 'currentSong', {
            get: function () {
                return this.songs[this.currentIndex]
            }
        })
    },

    handleEvents: function (){
        const _this = this
        const cdWidth = cd.offsetWidth

        // Xu li CD quay va dung
        const cdThumbAnimate = cd.animate([
            {
                transform: "rotate(360deg)"
            }
        ], {
            duration: 10000,
            iterations: Infinity
        })
        cdThumbAnimate.pause()

        // Xử lý phóng to/ thu nhỏ
        document.onscroll = function () {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const newCdWidth = cdWidth - scrollTop;
            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0;
            cd.style.opacity = newCdWidth / cdWidth
        }

        // Xử lý khi click play

        playBtn.onclick = () =>{
            if (_this.isPlaying) {
                audio.pause();
            } else {
                audio.play()
            }
        }

        // Khi Song dc play
        audio.onplay = () =>{
            _this.isPlaying = true;
            player.classList.add('playing')
            cdThumbAnimate.play()
        }
        // Khi Song dc pause
        audio.onpause = () =>{
            _this.isPlaying = false;
            player.classList.remove('playing')
            cdThumbAnimate.pause()

        }

        // Khi tien do bai hat thay doi
        audio.ontimeupdate = () =>{
            if(audio.duration){
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
                progress.value = progressPercent
            }
        }

        // Xu li khi tua soong
        progress.onchange = (e) =>{
            const seekTime = audio.duration/100 * e.target.value
            audio.currentTime = seekTime
        }

        // Khi next bai
        nextBtn.onclick = () =>{
            if (_this.isRandom) {
                _this.playRandomSong()
            }else{
                _this.nextSong()
            }
            audio.play()
            _this.render()
            _this.scrollToActiveSong()
        }
        
        // Khi prev bai
        prevBtn.onclick = () =>{
            if (_this.isRandom) {
                _this.playRandomSong()
            }else{
                _this.prevSong()
            }
            audio.play()
            _this.render()
            _this.scrollToActiveSong()
        }

        // Random
        randomBtn.onclick = (e) =>{
            _this.isRandom = !_this.isRandom
            _this.setConfig('isRandom', _this.isRandom)
            randomBtn.classList.toggle('active', _this.isRandom)
        }

        repeatBtn.onclick = (e) =>{
            _this.isRepeat = !_this.isRepeat
            _this.setConfig('isRepeat', _this.isRepeat)
            repeatBtn.classList.toggle('active', _this.isRepeat)
        }

        // Xu li next song khi audio ended
        audio.onended = () =>{
            if(_this.isRepeat){
                audio.play()
            }else{
                nextBtn.click()
            }

        }

        playList.onclick = (e) =>{
            const songNode = e.target.closest('.song:not(.active)')
            if (songNode || e.target.closest('.option')) {
                // Xu li click vao song
                if(songNode){
                    _this.currentIndex = Number(songNode.dataset.index)
                    _this.loadCurrentSong()
                    _this.render()
                    audio.play()
                }

                // Xu li option
                if( e.target.closest('.option')){

                }
            }
        }
    },
    scrollToActiveSong: function () {
        setTimeout(() =>{
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
            })
        },500)
    },
    loadCurrentSong: function () {
        
        heading.textContent = this.currentSong.name
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path

    },
    loadConfig: function () {
        this.isRandom = this.config.isRandom
        this.isRepeat = this.config.isRepeat
    },
    nextSong: function () {
        this.currentIndex++
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },
    prevSong: function () {
        this.currentIndex--
        if (this.currentIndex <0) {
            this.currentIndex = this.songs.length -1
        }
        this.loadCurrentSong()
    },
    playRandomSong: function () {
        let newIndex
        do {
            newIndex = Math.floor(Math.random() * this.songs.length)
        } while (newIndex === this.currentIndex);
        this.currentIndex = newIndex
        this.loadCurrentSong()
    },

    start: function () {
        this.loadConfig()
        //Define properties
        this.defineProperties()
        // Listen Event
        this.handleEvents()
        // Load song
        this.loadCurrentSong();
        // Render playlist
        this.render();

        randomBtn.classList.toggle('active', this.isRandom)
        repeatBtn.classList.toggle('active', this.isRepeat)
        
    }

}


app.start()