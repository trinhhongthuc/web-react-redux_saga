import React, { useState } from "react";
import FileBase64 from "react-file-base64";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { createProductsSaga } from "../../redux/actions/actions";
const FormData = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    title: "",
    price: "",
    description: "",
    img: "",
  });

  const onSubmitForm = (e) => {
    e.preventDefault();
    dispatch(createProductsSaga({ ...data, price: parseInt(data.price) }));
    setData({
      title: "",
      price: "",
      description: "",
      img: "",
    });
    alert("Tao san pham thanh cong ");
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-3">
            <div className="form-group-content">
              <h1 className="heading-form-data"> Nhập thông tin sản phẩm</h1>
              <form className="form" onSubmit={(e) => onSubmitForm(e)}>
                <div className="form-wrapper">
                  <div className="form-wrapper-label">Title</div>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-wrapper-input"
                    placeholder="Enter Title"
                    value={data.title}
                    onChange={(e) =>
                      setData({ ...data, title: e.target.value })
                    }
                  />
                </div>
                <div className="form-wrapper">
                  <div className="form-wrapper-label">Price</div>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-wrapper-input"
                    placeholder="Enter price"
                    value={data.price}
                    onChange={(e) =>
                      setData({ ...data, price: e.target.value })
                    }
                  />
                </div>
                <div className="form-wrapper">
                  <div className="form-wrapper-label ">Description</div>
                  <textarea
                    type="text"
                    name=""
                    id=""
                    className="form-wrapper-input form-wrapper-textarea"
                    placeholder="Enter description"
                    value={data.description}
                    onChange={(e) =>
                      setData({ ...data, description: e.target.value })
                    }
                  ></textarea>
                </div>
                <div className="form-wrapper">
                  <div className="form-wrapper-label">Image Product</div>
                  {/* <input
                    type="file"
                    name=""
                    id=""
                    className="form-wrapper-input "
                    value={data.img}
                    onChange={(e) => setData({ ...data, img: e.target.value })}
                  /> */}
                  <FileBase64
                    accept="image/*"
                    multiple={false}
                    type="file"
                    value={data.img}
                    onDone={({ base64 }) => setData({ ...data, img: base64 })}
                  />
                </div>
                <Button color="danger" type="submit" className="btn-read">
                  Add data
                </Button>{" "}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormData;
