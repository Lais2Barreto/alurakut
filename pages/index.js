import React from  'react'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AluraCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'

/* const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`
 */

function ProfileSideBar(propriedades) {
  console.log(propriedades)
  return (
    <Box as="aside">
      <img src={`https://github.com/${propriedades.githubUser}.png`} alt="Laís Barreto's profile" style={{ borderRadius: '8px' }} />
      <hr /> 
      <p>
        <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`}>
          @{propriedades.githubUser}
        </a>
      </p>  
      <hr />
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

export default function Home() {
  const [comunidades, setComunidades] = React.useState([{
    id: '1231242553464352352525645242',
    title: 'Painting is life',
    image: 'https://bloximages.newyork1.vip.townnews.com/winchesterstar.com/content/tncms/assets/v3/editorial/4/5d/45d18203-c9ee-5d9b-875e-59570516d969/60de5bb64f4ca.image.jpg?resize=1200%2C1613',
    url: 'https://www.domestika.org/en/courses/area/47-painting'
  }, 
  {
    id: '567475687576575464',
    title: 'I love programming',
    image: 'https://thumbs.dreamstime.com/b/poster-i-love-programming-laptop-smiling-man-isolated-orange-background-47388536.jpg',
    url: 'https://www.alura.com.br'
  },
  {
    id: '34893248925235',
    title: 'Dev Front-End',
    image: 'https://img.freepik.com/vetores-gratis/bandeira-de-conceitos-de-palavra-front-end-programacao-de-aplicativos-da-web_106317-84.jpg?size=626&ext=jpg',
    url: 'https://www.alura.com.br'
  },
  {
    id: '920842758923756',
    title: 'Astronomy',
    image: 'https://static.preparaenem.com/2020/11/astronomia.jpg', 
    url: 'https://www.youtube.com/watch?v=FCXY1Sxjg74'
  },
  {
    id: '528547239652342',
    title: 'Coffee Lovers',
    image: 'https://storage.googleapis.com/swag-swami-media/2020/11/c52a8d67-filter-coffee-loverblack.jpg', 
    url: 'https://en.wikipedia.org/wiki/Coffee'
  },
  {
    id: '13432536765734',
    title: `I'm into Games`,
    image: 'https://meups.com.br/wp-content/uploads/2020/02/The-Witcher-3.jpg', 
    url: 'https://store.steampowered.com/?'
  }]);
  const githubUser = 'Lais2Barreto';
/*   const comunidades = []; */
  const pessoasFavoritas = [
    'PhyrosAlpha',
    'liviab',
    'omariosouto',
    'juunegreiros',
    'peas',
    'gustavoguanabara'
  ]

  return ( 
    <>
    <AlurakutMenu githubUser={githubUser}/>
    <MainGrid>
      <div className="profileArea" style={{ gridArea: 'profileArea' }}>
        <ProfileSideBar githubUser={githubUser}/>
      </div>
      <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
        <Box>
          <h1 className="title">
            Welcome {githubUser}
          </h1>
          <OrkutNostalgicIconSet />
        </Box>
        <Box>
          <h2 className="subTitle">What do you wish to do?</h2>

          <form onSubmit={function handleCriaComunidade(e) {
            e.preventDefault();
            const dadosDoForm = new FormData(e.target);
            console.log('Campo: ', dadosDoForm.get('title'));
            console.log('Campo: ', dadosDoForm.get('image'));
            console.log('Campo: ', dadosDoForm.get('url'));

            const comunidade = {
              id: new Date().toISOString(),
              title: dadosDoForm.get('title'),
              image: dadosDoForm.get('image'),
              url: dadosDoForm.get('url')
            }
            const comunidadesAtualizadas = [...comunidades, comunidade];
            setComunidades(comunidadesAtualizadas);
          }}>
            <div>
              <input style={{ backgroundColor: 'rgba(0,0,0, .2)' }}
                placeholder="What's the name of your community?"
                name="title"
                aria-label="What's the name of your community?" 
                type="text" />  
            </div>
            <div>
              <input style={{ backgroundColor: 'rgba(0,0,0, .2)' }}
                placeholder="Place here a URL to use as cover"
                name="image"
                aria-label="Coloque uma URL para usarmos de capa" 
                type="text" /> 
            </div>

            <button>
              Create community
            </button>
          </form>
        </Box>
      </div>
      <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
            Communities ({comunidades.length})   
          </h2>
          <ul>
            {comunidades.map((itemAtual) => {
              return (
                <li key={itemAtual.id}>
                  <a href={`/users/${itemAtual.title}`} key={itemAtual.title}>
                    <img src={itemAtual.image} />
                    <span>{itemAtual.title}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </ProfileRelationsBoxWrapper>
        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
            Friends ({pessoasFavoritas.length})   
          </h2>
          <ul>
            {pessoasFavoritas.map((itemAtual) => {
              return (
                <li key={itemAtual}>
                  <a href={`/users/${itemAtual}`} key={itemAtual}>
                    <img src={`https://github.com/${itemAtual}.png`} />
                    <span>{itemAtual}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </ProfileRelationsBoxWrapper>
   
      </div>  
    </MainGrid>
    </>
  )  
}
