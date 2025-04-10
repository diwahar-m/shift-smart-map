import AppHStack from '../mui/AppStack/AppHStack'
import { Circle } from 'lucide-react'
import AppText from '../mui/AppText'

export default function TagCard() {
  return (
    <AppHStack sx={{width: '77px',height: '24px', borderRadius:'100px', padding: "4px 8px", gap:'4px', backgroundColor: '#DDF6E9'}}>
        <Circle 
            color="#047857"
            size="16px"
            style={{
            backgroundColor: '#047857', // Change this color to fill the circle
            borderRadius:'100%'
        }} 
        />
        <AppText variant='subtitle2' sx={{fontSize:'12px'}}  text={"On Shelf"}/>
    </AppHStack>
  )
}
