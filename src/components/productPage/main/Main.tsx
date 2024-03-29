import { IoShareSocialOutline } from 'react-icons/io5'
import Buy from '../buy/Buy'
import style from './Main.module.sass'

interface IMain {
  title: string
  preview: Array<string>
  bigImg: Array<string>
  companyImg: string
  subtitle: string
  count: number
  price: number
  slide: number
  setSlide: Function
}

function Main({
  title,
  preview,
  bigImg,
  companyImg,
  subtitle,
  count,
  price,
  slide,
  setSlide,
}: IMain) {
  return (
    <main key={1} className={style.main}>
      <h1 className={style.title}>{title}</h1>
      <div className={style.mainInfo}>
        <div className={style.img}>
          <div className={style.preview}>
            {preview.map((img: string, i: number) => (
              <img key={i} onClick={() => setSlide(i)} src={img} />
            ))}
          </div>
          <div className={style.image}>
            <img src={bigImg[slide]} alt='' />
          </div>
        </div>
        <div className={style.info}>
          <div className={style.infoTop}>
            <h2>{subtitle}</h2>
            <div className={style.companyImage}>
              <img src={companyImg} alt='' />
            </div>
          </div>
          <div className={style.info_stat}>
            <div>
              <div className={style.info_comparison}>
                Сравнить <input type='checkbox' />
              </div>
            </div>
            <div className={style.share}>
              <IoShareSocialOutline />
            </div>
          </div>
          <Buy count={count} price={price} />
        </div>
      </div>
    </main>
  )
}

export default Main
