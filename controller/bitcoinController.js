const Bitcoin = require('../model/bitcoinModel');

const bitcoinController = {
  // Phương thức POST để tạo một đối tượng Crypto mới
  postBitcoin: async (req, res) => {
    try {
      // Lấy dữ liệu từ yêu cầu
      const bitcoinData = req.body;

      const newBitcoin= new Bitcoin(bitcoinData);

      // Lưu đối tượng Crypto vào cơ sở dữ liệu
      await newBitcoin.save();

      // Trả về phản hồi với đối tượng Crypto đã được lưu
      res.status(201).json({ message: 'Đối tượng Crypto đã được tạo thành công', bitcoin: newBitcoin });

    } catch (error) {
      // Xử lý lỗi nếu có
      console.error('Lỗi khi tạo đối tượng Crypto:', error);
      res.status(500).json({ error: 'Lỗi máy chủ nội bộ' });
    }
  },
  getBitcoin: async (req, res) => {
    try {
      // Lấy tất cả các đối tượng Crypto từ cơ sở dữ liệu
      const bitcoin = await Bitcoin.find();

      // Trả về phản hồi với danh sách các đối tượng Crypto đã được lấy
      res.status(200).json(bitcoin);
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error('Lỗi khi lấy danh sách Crypto:', error);
      res.status(500).json({ error: 'Lỗi máy chủ nội bộ' });
    }
  }
};

module.exports = bitcoinController;
