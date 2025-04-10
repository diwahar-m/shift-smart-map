import { Map, Text } from 'lucide-react'
import AppHStack from '../mui/AppStack/AppHStack'
import AppButton from '../mui/AppButton'
import { useNavigate, useParams } from 'react-router-dom'

export default function PathCard() {

    const navigate = useNavigate();
    const {stateId} = useParams();


  return (
    <AppHStack >
        <AppButton 
          handleClick={()=> navigate('/')}
          sx={{maxWidth:'10px', padding:'9px', backgroundColor:'#E9EFF7', borderRightWidth: '1px',borderTopLeftRadius:'8px',borderBottomLeftRadius:'8px', border:'1px solid #CBD5E1', borderTopRightRadius: 0,borderBottomRightRadius: 0}}
          >
            <Map width={'12px'} color={'#052757'}/>
        </AppButton>
        <AppButton 
           handleClick={()=> navigate('/Montana/stores')}
           sx={{width:'50%', padding:'9px', backgroundColor:'#fff', borderRightWidth: '1px',borderTopRightRadius:'8px',borderBottomRightRadius:'8px', border:'1px solid #CBD5E1', borderTopLeftRadius:0, borderBottomLeftRadius: 0}}
        >
            <Text width={'12px'}/>
        </AppButton>
    </AppHStack>
  )
}
