import Style from './style.module.css'

export default function Destaques() {
    return (<section className={Style.Wrapper}>
        <button>Melhor</button>
        <button>Em Destaque</button>
        <button>Novo</button>
        <button>Mais votados</button>
        <button>Extras</button>
    </section>)
  }
