export const MyFirstComponent = ({ name, age }) => {

   const randomString = 'randomString'
   const secondaryString = `This is the randomstring: ${randomString}`

   return (
      <div>
         <h1>Whatsup {name} age {age}</h1>
      </div>
   )
}
