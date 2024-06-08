import React from 'react';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedColor: null };
  }

  handleColorClick = (color) => {
    this.setState({ selectedColor: color });
    this.props.onColorSelect(color);
  };

  render() {
    const { colors } = this.props;
    const { selectedColor } = this.state;

    return (
      <div className="color-picker" style={{ display: 'flex', gap: '10px' }}>
        {colors.map((color) => (
          <div
            key={color}
            className={`color-icon ${selectedColor === color ? 'selected' : ''}`}
            style={{
              backgroundColor: color,
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'inline-block',
              border: selectedColor === color ? '3px solid black' : '2px solid white',
              cursor: 'pointer',
            }}
            onClick={() => this.handleColorClick(color)}
          />
        ))}
      </div>
    );
  }
}

export default ColorPicker;
