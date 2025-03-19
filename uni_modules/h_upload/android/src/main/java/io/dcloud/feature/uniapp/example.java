package io.dcloud.feature.uniapp.example;

import android.content.Context;
import android.os.Handler;
import android.os.Looper;
import android.util.Log;
import org.json.JSONObject;
import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;
import okhttp3.MediaType;
import okhttp3.MultipartBody;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import io.dcloud.feature.uniapp.annotation.UniJSMethod;
import io.dcloud.feature.uniapp.bridge.UniJSCallback;
import io.dcloud.feature.uniapp.common.UniModule;

public class FileUploadModule extends UniModule {
    private static final String TAG = "FileUploadModule";
    private static final MediaType MEDIA_TYPE_TXT = MediaType.get("text/plain");

    @UniJSMethod(uiThread = true)
    public void uploadFile(String filePath, String url, final UniJSCallback callback) {
        new Thread(() -> {
            try {
                File file = new File(filePath);
                if (!file.exists()) {
                    sendCallback(callback, false, "文件不存在");
                    return;
                }

                OkHttpClient client = new OkHttpClient.Builder()
                       .connectTimeout(10, TimeUnit.SECONDS)
                       .writeTimeout(10, TimeUnit.SECONDS)
                       .readTimeout(30, TimeUnit.SECONDS)
                       .build();

                RequestBody requestBody = new MultipartBody.Builder()
                       .setType(MultipartBody.FORM)
                       .addFormDataPart("file", file.getName(), RequestBody.create(file, MEDIA_TYPE_TXT))
                       .build();

                Request request = new Request.Builder()
                       .url(url)
                       .post(requestBody)
                       .build();

                Response response = client.newCall(request).execute();
                if (response.isSuccessful()) {
                    String responseData = response.body().string();
                    sendCallback(callback, true, responseData);
                } else {
                    sendCallback(callback, false, "上传失败: " + response.message());
                }
            } catch (IOException e) {
                Log.e(TAG, "上传文件出错: " + e.getMessage());
                sendCallback(callback, false, "上传文件出错: " + e.getMessage());
            }
        }).start();
    }

    private void sendCallback(final UniJSCallback callback, final boolean success, final String message) {
        new Handler(Looper.getMainLooper()).post(() -> {
            try {
                JSONObject result = new JSONObject();
                result.put("success", success);
                result.put("message", message);
                callback.invoke(result);
            } catch (Exception e) {
                Log.e(TAG, "回调出错: " + e.getMessage());
            }
        });
    }
}