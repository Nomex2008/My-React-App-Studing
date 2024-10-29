let isAuth = false

const NAME = [
  'Alex',
  'Nomex',
]

const Hero = ({role}: any) => {
  return (
    <>
        <p>Hi!</p>
      <div>
      I am {NAME.map(name => (<span key={name}>{name} </span>))}
      </div>

      {isAuth 
      ? 'You authorized' 
      : role === 'admin'
      ? 'Admin'
      : 'Log in!'}
      
    </>
  )
}

export default Hero