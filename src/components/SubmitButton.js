import React from 'react';
import ReactLoading from 'react-loading';

export default function SubmitButton(props) {
    return (
        <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {props.loading ? (
                <ReactLoading type={'bubbles'} color="#0084ff" />
            ) : (
                props?.title && (
                    <button type="submit" className="btn btn-primary " style={{ background: '#0084ff' }} onClick={props.onPressButton}>
                        {props?.title}
                    </button>
                )
            )}
        </div>
    );
}
