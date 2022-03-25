import React from 'react'
import '../Ideana/IdeanaAdd.css'
import { Input } from 'antd';
import { Select } from 'antd';
export default function IdeanaAdd() {
  const { Option } = Select;
  const { TextArea } = Input;

  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onSearch(val) {
    console.log('search:', val);
  }
  return (
    <div className="postmain">
      <div className="Ideana_container">
        <div className="Ideana_heading">Post Your Idea</div>
        <div className="Ideana_postcard">
          <div>
            <div className="Ideana_Headingtext">Title</div>
            <div className="Ideana_posttext">Be specific and imagine you’re asking a question to another person</div>
            <div><Input className="Ideana_input" /></div>
          </div>
          <div>
            <div className="Ideana_Headingtext">Domine</div>
            <div className="Ideana_posttext">
              <Select
                style={{ width: '96.5%' }}
                showSearch
                placeholder="Select Your Domain"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>,
            </div>
          </div>
          <div>
            <div className="Ideana_Headingtext">Description</div>
            <div className="Ideana_textarea">
              <TextArea rows={15} maxLength={15} />
            </div>
          </div>
        </div>
        <div className="Ideana_postbutton">
        <button>Post</button>
      </div>
      </div> 
    </div>
  )
}
