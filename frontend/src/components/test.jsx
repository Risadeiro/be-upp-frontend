import React from "react";
import PropTypes from "prop-types";

const noop = () => {
    // do nothing real quick
};

class FixRequiredSelect extends React.Component {
    state = {
        value: this.props.value || ""
    };

    selectRef = null;
    setSelectRef = ref => {
        this.selectRef = ref;
    };

    onChange = (value, actionMeta) => {
        this.props.onChange(value, actionMeta);
        this.setState({ value });
    };

    getValue = () => {
        if (this.props.value != undefined) return this.props.value;
        return this.state.value || "";
    };

    render() {
        const { SelectComponent, required, ...props } = this.props;
        const { isDisabled } = this.props;
        const enableRequired = !isDisabled;

        return (
            <div>
                <SelectComponent
                    {...props}
                    ref={this.setSelectRef}
                    onChange={this.onChange}
                />
                {enableRequired && (
                    <input
                        tabIndex={-1}
                        autoComplete="off"
                        style={{
                            opacity: 0,
                            width: "100%",
                            height: 0,
                            position: "absolute"
                        }}
                        value={this.getValue()}
                        onChange={noop}
                        onFocus={() => this.selectRef.focus()}
                        required={required}
                    />
                )}
            </div>
        );
    }
}

FixRequiredSelect.defaultProps = {
    onChange: noop
};

FixRequiredSelect.protoTypes = {
    // react-select component class (e.g. Select, Creatable, Async)
    selectComponent: PropTypes.func.isRequired,
    onChange: PropTypes.func,
    required: PropTypes.bool
};

export default FixRequiredSelect;


// import React from "react";
// import BaseSelect from "react-select";
// import FixRequiredSelect from "./FixRequiredSelect";

// const options = [
//   { value: 1, label: "1 - One" },
//   { value: 2, label: "2 - Two" },
//   { value: 3, label: "3 - Three" }
// ];

// const Select = (props) => (
//   <FixRequiredSelect
//     {...props}
//     SelectComponent={BaseSelect}
//     options={props.options || options}
//   />
// );

// export default class App extends React.Component {
//   render() {
//     return (
//       <div className="container">
//         <h1>
//           react-select v2 <code>required</code>
//         </h1>
//         <hr />

//         <div className="card mb-3">
//           <h3 className="card-header">Uncontolled Select Components</h3>
//           <div className="card-body">
//             <p className="card-text">
//               The <code>value</code> prop is <em>not</em> passed in.
//             </p>
//             <form>
//               <div className="form-group">
//                 Select <i className="text-danger">required</i>
//                 <Select options={options} isSearchable required />
//               </div>
//               <div className="form-group">
//                 Select <i className="text-secondary">not required</i>
//                 <Select options={options} />
//               </div>
//               <button className="btn btn-primary">Submit</button>
//             </form>
//           </div>
//         </div>

//         <div className="card mb-3">
//           <h3 className="card-header">Controlled Select</h3>
//           <div className="card-body">
//             <p className="card-text">
//               The <code>value</code> prop <em>is</em> passed in.
//             </p>
//             <form>
//               <div className="form-group">
//                 Select <i className="text-danger">required</i>
//                 <Select
//                   value={options[0]}
//                   options={options}
//                   isSearchable
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 Select <i className="text-secondary">not required</i>
//                 <Select value={options[1]} options={options} />
//               </div>
//               <div className="form-group">
//                 Select <i className="text-secondary">required</i> but has{" "}
//                 <code>isDisabled</code> prop it's ignored
//                 <Select value="" options={options} required isDisabled={true} />
//               </div>
//               <div className="form-group">
//                 Select <i className="text-secondary">required</i> and no{" "}
//                 <code>value</code> prop set undefined
//                 <Select value="" options={options} required />
//               </div>
//               <button className="btn btn-primary">Submit</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
