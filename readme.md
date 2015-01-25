## Realtime animation of Arduino temperature on multiple browsers 
#### Jan.2015 Masuda.Michinori    
![alt picture](pic.jpg)

### �@�\
* �T�[�o�ɐڑ�����Arduino��̉��x�Z���T�[�iLM35DM�j�̒l��ǂݎ��A�N���C�A���g�i�u���E�U�j��Ɏ��n��A�j���[�V�����Ƃ��ĕ\������B  
* �u���E�U����A�\���i���m�ɂ̓T�[�o����̑��M�j��on/off�𑀍�ł���B  
* �T�[�o�ɐڑ����ꂽ�����̃N���C�A���g��ŁA�����ɕ\���ł���B
  
### ����  
* �T�[�o���Fnode.js�v���b�g�t�H�[���AArduino��̉��x�Z���T�[����̓ǂݎ���Firmata���[johnny-five](https://github.com/rwaldron/johnny-five)���g�p�B
* �N���C�A���g���F�u���E�U�ł̃A�j���[�V�����\����[Smoothie Charts](http://smoothiecharts.org/)���g�p�B
* �N���C�A���g/�T�[�o�ԒʐM�FHTML/Javascript�̓ǂݎ���http��p������A���x�f�[�^�Ɛ���̂��Ƃ��socket.io��p����B
* [Smoothie Charts](http://smoothiecharts.org/),[johnny-five](https://github.com/rwaldron/johnny-five)�̒��쌠�̈����ɂ��ẮA���ꂼ��̃R�[�h���Q�Ƃ̎��B
  
### �t�@�C���\���Ɣz�u  
* �T�[�o���Fnode.js���s�ꏊ�ɁA/get_temperature.js
* �N���C�A���g���Fnode.js���s�ꏊ/public/�ɁAindex.html�@�Ɓ@smoothie_mm.js
  
### ����A�y�сA�I�v�V����
* �T�[�o���F$node get_temperature.js���N���A�N���C�A���g�̓T�[�o�̏�����������ɋN���̎��B�������̓R���\�[���Ŋm�F�ł���B
* �N���C�A���g���Flocalhost:8080�i����PC�Ŏ��s���j
,  http://ip_address:8080/index.html�i�l�b�g���[�N�o�R�̏ꍇ�j
* �N���C�A���g�ł�y���\���͈͂�smoothie_mm.js��495-6�s�Őݒ�i�ő�25�x�A�ŏ�15�x�j
  
### ����m�F��
* �T�[�o���Fwindows8.1, node.js v0.10.35, express 4.10.7, socket.io 1.2.1
* Arduino�FArduino Uno R3, IDE 1.0.6. johmmy-five 0.8.37
* �N���C�A���g��:chrome/windows8.1 40.0.2214.91,Safari/iOS 8.1.2

### Known issues
* get_temperature.js�ɂ����āAsocket.broadcast.emit�����ł́A�u���E�U����index.html��2�x�ǂݍ��܂Ȃ��ƁA�u���E�U���f�[�^��M����Ȃ��B���̉���̂��߂ɁAsocket.emit��ǉ����Ă���B�i�����s���j  
* smoothie_mm.js�ɂ����āAy���\���͈͂�495-6�s�ɒ��l�Őݒ肵�Ă���B���͈̔͂𒴂��Ă������I�ɕ\���͈͂��g�傷�邪�A��U�g���ɏ����l�������ƁA�\���͈͂͏����������B�i���l�łȂ��ݒ���@���܂߂č���̉ۑ�j
