��Ӧ�ļ����ļ��е��ô���
common:��������
config������
libs�����ݿ�����
middlewares:�����м��
models: ��Ų������ݿ���ļ�
public: ��ž�̬�ļ�������ʽ��ͼƬ��
routes: ���·���ļ�
views: ���ģ���ļ�
index.js: �������ļ�
package.json: �洢��Ŀ�������������ߡ������ȵ���Ϣ
С��ʾ����֪���߷�����û�У�������ѭ�� MVC��ģ��(model)����ͼ(view)��������(controller/route)�� �Ŀ���ģʽ��



��Ӧģ����ô���

express: web ���
express-session: session �м��
connect-mongo: �� session �洢�� mongodb����� express-session ʹ��
connect-flash: ҳ��֪ͨ��ʾ���м�������� session ʵ��
ejs: ģ��
express-formidable: ���ձ����ļ����ϴ��м��
config-lite: ��ȡ�����ļ�
marked: markdown ����
moment: ʱ���ʽ��
mongolass: mongodb ����
objectid-to-timestamp: ���� ObjectId ����ʱ���
sha1: sha1 ���ܣ������������
winston: ��־
express-winston: ���� winston ������ express ����־�м��



�ڿ�������֮ǰ������������Ҫ��ȷ����Ҫʵ����Щ���ܡ����ڱ��̳������ѧ�ߣ�����ֻʵ���˲���������Ĺ��ܣ�����Ĺ��ܣ���鵵����ǩ����ҳ�ȵȣ����߿�����ʵ�֡�

���ܼ�·��������£�

ע��
ע��ҳ��GET /signup
ע�ᣨ�����ϴ�ͷ�񣩣�POST /signup
��¼
��¼ҳ��GET /signin
��¼��POST /signin
�ǳ���GET /signout
�鿴����
��ҳ��GET /posts
������ҳ��GET /posts?author=xxx
�鿴һƪ���£��������ԣ���GET /posts/:postId
��������
��������ҳ��GET /posts/create
�������£�POST /posts
�޸�����
�޸�����ҳ��GET /posts/:postId/edit
�޸����£�POST /posts/:postId/edit
ɾ�����£�GET /posts/:postId/remove
����
�������ԣ�POST /posts/:postId/comment
ɾ�����ԣ�GET /posts/:postId/comment/:commentId/remove
�������ǲ���ҳ���Ǻ����Ⱦ�ģ�����ֻͨ���򵥵� <a>(GET) �� <form>(POST) ���˽��н��������ʹ�� jQuery ��������ǰ�˿�ܣ��� angular��vue��react �ȵȣ���ͨ�� Ajax ���˽������� api �����Ӧ������ѭ restful ���

restful

restful ��һ�� api ����Ʒ�������һ�� api �����ԭ���Լ��������

������ɾ�����µ�·����ƣ�

GET /posts/:postId/remove
restful ������ƣ�

DELETE /post/:postId
���Կ�����restful ���� api ��ֱ�������š�