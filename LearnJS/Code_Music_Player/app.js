const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const player = $('.player')
const heading = $('header h2')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const cd = $('.cd')
const playBtn = $('.btn-toggle-play')
const progress = $('#progress')
const nextBtn = $('.btn-next')
const prevBtn = $('.btn-prev')


const app = {
    currentIndex: 0,
    isPlaying: false,

    songs: [
        {
            name: "Bởi vì yêu",
            singer: "JukySan",
            path: "../Code_Music_Player/song/BoiViYeu-JukySan-7120987.mp3",
            image: "https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg"
        },
        {
            name: "Chống lại thế giới",
            singer: "Raftaar x Salim Merchant x Karma",
            path: "../Code_Music_Player/song/ChongLaiTheGioi-NgoKienHuy-7120548.mp3",
            image:
                "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
        },
        {
            name: "Em da co nguoi mới",
            singer: "Raftaar x Brobha V",
            path:
                "../Code_Music_Player/song/EmDaCoNguoiMoi-TocTienNguoicu-7122784.mp3",
            image: "https://i.ytimg.com/vi/QvswgfLDuPg/maxresdefault.jpg"
        },
        {
            name: "Gap may",
            singer: "Raftaar x Nawazuddin Siddiqui",
            path: "../Code_Music_Player/song/GapMay-WrenEvans-7127718.mp3",
            image:
                "https://a10.gaanacdn.com/images/song/39/24225939/crop_480x480_1536749130.jpg"
        },
        {
            name: "Nhat ban roi",
            singer: "Raftaar",
            path: "../Code_Music_Player/song/NhatBanRoi-HuyenSambi-7123548.mp3",
            image:
                "https://a10.gaanacdn.com/images/albums/72/3019572/crop_480x480_3019572.jpg"
        },
        {
            name: "Damn",
            singer: "Raftaar x kr$na",
            path:
                "../Code_Music_Player/song/YeuKhongCanEp-BaoAnh-7122895.mp3",
            image:
                "https://a10.gaanacdn.com/images/albums/72/3019572/crop_480x480_3019572.jpg"
        },
    ],
    render: function () {
        const htmls = this.songs.map(song => {
            return `
            <div class="song">
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
        const cdThumbAnimate =  cdThumb.animate([
            { transform: 'rotate(360deg)'}
        ],{
            duration: 10000,
            iteration: Infinity
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
            _this.nextSong()
            audio.play()
        }
        
        // Khi prev bai
        prevBtn.onclick = () =>{
            _this.prevSong()
            audio.play()
        }

    },

    loadCurrentSong: function () {
        
        heading.textContent = this.currentSong.name
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path

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
    start: function () {
        //Define properties
        this.defineProperties()
        // Listen Event
        this.handleEvents()
        // Render playlist
        this.render();
        // Load song
        this.loadCurrentSong();
    }

}


app.start()