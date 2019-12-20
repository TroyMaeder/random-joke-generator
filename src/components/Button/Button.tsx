import React from 'react'
import cn from 'classnames'
import './button.scss'

interface ButtonProps {
    text: string
    className?: string
    onClick?: () => void
}

const Button = ({ text, onClick, className }: ButtonProps) => (
    <button
        className={cn('btn', className)}
        onClick={onClick}
    >
        {text}
    </button>
)

export default Button