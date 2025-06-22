import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'
import conf from '../conf/conf'

const RTE = ({name, control, label, defaultValue="write article here"}) => {
  return (
    <div className='w-full mb-4'>
        {label && <label className='inline-block text-base font-semibold mb-2'>{label}</label>}

        <Controller
            // apiKey={conf.tinymceApikey}
            name={name || "content"}
            control={control}
            defaultValue={defaultValue}
            render={({field: {onChange}}) => (
                <Editor
                    apiKey={conf.tinymceApikey}
                    initialValue={defaultValue}
                    init={
                        {
                            branding: false,
                            height: 650,
                            menubar: true,
                            plugins: 'anchor autolink charmap codesample emoticons image lists media searchreplace table visualblocks wordcount',
                            toolbar: 'undo redo | formatselect | bold italic underline backcolor | ' +
                                    'alignleft aligncenter alignright alignjustify | ' +
                                    'bullist numlist outdent indent | removeformat | help',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                            
                        }
                    }
                    onEditorChange={onChange}
                />
            )}
        />
    </div>
  )
}

export default RTE