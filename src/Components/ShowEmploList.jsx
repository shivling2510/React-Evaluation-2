
const ShowEmploList =({data})=>{
    // console.log('nnnnnnnnnnn', name, role)
    console.log('ddddddddddddddddd', data)

    return(
        <div>
            employ 
            <table>
                <tbody>
                  <tr>
                      <th>sr no</th>
                  <th>name</th>
                    <th>role</th>
                    <th>salary</th>
                    <th>age</th>
                    <th>gender</th>
                  </tr>
                  {
                data.map((data, index)=>{
                    return(
                        <tr key={data.id}>
                            <th> {index +1} </th>
                    <th>{data.name}</th>
                    <th> {data.role} </th>
                    <th>{ data.salary }</th>
                    <th> {data.age} </th>
                    <th> {data.gender} </th>
                        </tr>
                    )
                })
            }
                </tbody>
            </table>
          
        </div>
    )
}
export default ShowEmploList;