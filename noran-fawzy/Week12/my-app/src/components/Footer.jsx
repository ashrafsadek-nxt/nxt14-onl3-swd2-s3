import React from 'react'
import LeftFooter from './LeftFooter'
import RightFooter from './RightFooter'
export default function Footer() {
return (
<footer className="footer">
<div className="footer-left">
<LeftFooter />
</div>
<div className="footer-right">
<RightFooter />
</div>
</footer>
)
}