import React from "react";

const Window = props => {
    const title = props.title || '',
        hasTitle = props.hasTitle || true,
        titleCls = props.titleCls ? `default-window-title ${props.titleCls}` : 'default-window-title',
        isModal = props.isModal || false,
        contentCls = props.contentCls ? `default-window-content ${props.contentCls}` : 'default-window-content',
        cls = props.cls ? `default-window ${props.cls}` : 'default-window';


    if(isModal)
        return (
        <div className={'modal'}>
            <div className={`modal-content ${cls}`}>
                {hasTitle && <div className={titleCls}>{title}</div>}
                {props.children ? <div className={contentCls}>{props.children}</div> : null}
            </div>
        </div>
        )
    else
        return (
            <div className={cls}>
                {props.hasTitle && <div className={titleCls}>{title}</div>}
                {props.children ? <div className={contentCls}>{props.children}</div> : null}
            </div>
        )


}

export default Window;
