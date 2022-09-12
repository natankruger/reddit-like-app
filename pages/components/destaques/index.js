import Style from './style.module.css'
import BtnStyle from './buttonStyle.module.css'

export default function Destaques() {
    return (<section className={Style.Wrapper}>
        <button className={BtnStyle.NeonButton}>Melhor</button>
        <button className={BtnStyle.NeonButton}>Em Destaque</button>
        <button className={BtnStyle.NeonButton}>Novo</button>
        <button className={BtnStyle.NeonButton}>Mais votados</button>
        <button className={BtnStyle.NeonButton}>Extras</button>
    </section>)
  }
