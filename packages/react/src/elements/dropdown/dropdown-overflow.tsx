import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import clsx from 'clsx';

type DropdownOverFlow = {
    label: string
    items: { name: string, href?: string }[]
    theme?: 'dark' | 'light'
}

type Items = {
    position: { top: number, left: number }
    items: { name: string, href?: string }[]
}

const Items = ({ position, items }: Items) => {
    return (
        <div
            className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
            style={{ top: position.top, left: position.left }}
        >
            <div className="py-1">
                {items.map((item, index) => (
                    <div key={`${item.name}-${index}`}>
                        <div>
                            <a
                                href={item?.href}
                                className="hover:bg-gray-100 hover:text-gray-900 text-gray-700 block px-4 py-2 text-sm"
                            >
                                {item?.name}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export const DropdownOverFlow = ({ label, items, theme = 'light' }: DropdownOverFlow) => {
    const ref = useRef<HTMLDivElement>(null)
    const [open, setOpen] = useState(false)
    const [position, setPosition] = useState({ top: 0, left: 0 })
    const updatePosition = () => {
        if (ref.current) {
            const top = ref.current.offsetTop + ref.current.offsetHeight + 4
            const left = ref.current.offsetLeft - 8
            setPosition({ top, left })
        }
    }
    React.useEffect(updatePosition, [open])
    return (
        <div className="inline-block text-left">
            <div ref={ref}>
                <button onClick={() => setOpen(!open)} className={clsx('text-base font-medium hover:text-gray-300 focus:outline-none', theme == 'dark' ? 'text-white' : 'text-dark')}>
                    <span className="sr-only">Open options</span>
                    <span className="mr-1">{ label }</span>
                    ...
                </button>
            </div>
            {open && <Items position={position} items={items} />}
        </div>
    )
}
